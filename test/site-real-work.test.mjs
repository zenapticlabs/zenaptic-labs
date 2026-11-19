import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => readFileSync(path.join(root, relativePath), "utf8");
const exists = (relativePath) => existsSync(path.join(root, relativePath));

test("the homepage has a Shipped section with all verified public work", () => {
  assert.equal(exists("src/components/ShippedWork.astro"), true);

  const shipped = read("src/components/ShippedWork.astro");
  for (const expected of [
    "pdfmill",
    "bidmill",
    "Sortle — The Daily Edition",
    "Waybill: Daily Routing Puzzle",
    "https://pdfmill.dev",
    "https://bidmill.app",
    "https://play.google.com/store/apps/details?id=com.zenapticlabs.sortle",
    "https://play.google.com/store/apps/details?id=com.zenapticlabs.waybill",
  ]) {
    assert.match(shipped, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("the shipped visuals are local copies of the public work", () => {
  for (const asset of [
    "public/assets/shipped/pdfmill.png",
    "public/assets/shipped/bidmill.png",
    "public/assets/shipped/sortle.png",
    "public/assets/shipped/waybill.png",
  ]) {
    assert.equal(exists(asset), true, `${asset} should exist`);
  }
});

test("the homepage no longer imports invented case studies or a client logo wall", () => {
  const homepage = read("src/pages/index.astro");
  assert.doesNotMatch(homepage, /RealWorldSolution|BrandsSection|IntelligentSolutions|ProgressSteps/);
  assert.match(homepage, /ShippedWork/);
});

test("the hero uses the decided paperwork direction", () => {
  const hero = read("src/components/Hero.astro");
  assert.match(hero, /AI THAT DOES THE/);
  assert.match(hero, /PAPERWORK/);
  assert.match(hero, /INVOICES, BOOKS, COMPLIANCE RECORDS, AND DOCUMENT REVIEW/);
  assert.doesNotMatch(hero, /Your Trusted Technology Partner/);
});

test("the retired Service route redirects to verified shipped work", () => {
  const servicePage = read("src/pages/Service.astro");
  assert.match(servicePage, /Astro\.redirect\("\/#shipped", 302\)/);
  assert.doesNotMatch(servicePage, /ServiceDetails/);
});

test("fabricated case-study and client-wall assets are gone", () => {
  for (const asset of [
    "public/assets/1-real-world-solution.png",
    "public/assets/2-real-world-solution.png",
    "public/assets/3-real-world-solution.png",
    "public/assets/CaseStudy1.png",
    "public/assets/CaseStudy2.png",
    "public/assets/CaseStudy3.png",
    "public/assets/CaseStudyTech1.png",
    "public/assets/CaseStudyTech2.png",
    "public/assets/CaseStudyTech3.png",
    "public/assets/CaseStudyWeb1.png",
    "public/assets/CaseStudyWeb2.png",
    "public/assets/CaseStudyWeb3.png",
    "public/assets/pepsico-light.svg",
    "public/assets/gofundme-light.svg",
    "public/assets/chipotle-light.svg",
    "public/assets/washingtonuniversity-light.svg",
    "public/assets/delta-light.svg",
    "public/assets/pepsico-dark.svg",
    "public/assets/gofundme-dark.svg",
    "public/assets/chipotle-dark.svg",
    "public/assets/washingtonuniversity-dark.svg",
    "public/assets/delta-dark.svg",
    "src/assets/CaseStudy1.png",
    "src/assets/CaseStudy2.png",
    "src/assets/CaseStudy3.png",
    "src/assets/CaseStudyTech1.png",
    "src/assets/CaseStudyTech3.png",
    "src/assets/CaseStudyWeb1.png",
    "src/assets/CaseStudyWeb2.png",
    "src/assets/CaseStudyWeb3.png",
    "src/assets/CasestudyTech2.png",
    "src/assets/brands/chipotle_logo.svg",
    "src/assets/brands/delta_logo.svg",
    "src/assets/brands/go_fund_me_logo.svg",
    "src/assets/brands/pepsico_logo.svg",
    "src/assets/brands/washington_university_logo.svg",
  ]) {
    assert.equal(exists(asset), false, `${asset} should be removed`);
  }
});

test("the footer does not imply unsupported social profiles", () => {
  const footer = read("src/components/Footer.jsx");
  assert.doesNotMatch(footer, /Follow us|facebook-light|linkedin-light|X-light/);
});

test("removed content does not leave its unused components or step assets in the deploy", () => {
  for (const asset of [
    "src/components/Animation/DataAndWarehousingAnimation/DataAndWarehousingAnimation.tsx",
    "src/components/Layout.astro",
    "src/components/MotionPrimitivesComponents/3d-effect.jsx",
    "src/components/MotionPrimitivesComponents/cursor-spring.tsx",
    "src/components/MotionPrimitivesComponents/infinite-slider.tsx",
    ...[1, 2, 3, 4, 5, 6].flatMap((step) => [
      `public/assets/Step${step}.svg`,
      `public/assets/step${step}-light.svg`,
      `public/assets/step${step}-dark.svg`,
    ]),
  ]) {
    assert.equal(exists(asset), false, `${asset} should be removed`);
  }
});

test("Shipped labels meet AA contrast in both themes", () => {
  const shipped = read("src/components/ShippedWork.astro");
  assert.doesNotMatch(shipped, /#C25A08/);
  assert.equal((shipped.match(/bg-\[#B05206\]/g) ?? []).length, 2);
  assert.equal((shipped.match(/text-white/g) ?? []).length, 2);
});

test("navigation labels the verified work section as Shipped", () => {
  const header = read("src/components/Header.astro");
  assert.match(header, /href="\/#shipped"[\s\S]{0,500}>Shipped</);
  assert.doesNotMatch(header, />Case Studies</);
  assert.doesNotMatch(header, />Services</);
});

test("contact content does not retain the unsupported software-ideas marquee", () => {
  const contact = read("src/components/TellUsAbout.jsx");
  assert.doesNotMatch(contact, /TRANSFORMING SOFTWARE IDEAS FOR YOUR BUSINESS INTO LIFE/);
});

test("the Shipped section keeps its anchor id unique", () => {
  const header = read("src/components/Header.astro");
  assert.doesNotMatch(header, /id="shipped"/);
});

test("the active hero SVG uses React-compatible attribute names", () => {
  const banner = read("src/components/Animation/BannerGrid/BannerGridBlack.tsx");
  assert.doesNotMatch(
    banner,
    /(?:clip-path|fill-opacity|stroke-width|shape-rendering|stroke-opacity|color-interpolation-filters|flood-opacity|stop-color|stop-opacity)=/
  );
});

test("changed copy does not rely on decorative gradient text", () => {
  for (const source of ["src/components/Hero.astro", "src/components/TellUsAbout.jsx"]) {
    assert.doesNotMatch(read(source), /bg-clip-text\s+text-transparent|bg-gradient-to-[lr]/);
  }
});

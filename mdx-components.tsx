import type { MDXComponents } from 'mdx/types';
import { HeroBlock, Section, Grid, NumberedCard, ImageBlock, CheckBullet,TextBlock, YoutubeVideoLink } from "@/components/mdx"
import Button from "@/components/ui/buttons/button";
import ButtonGroup from "@/components/ui/buttons/button-group";
import HubSpotForm from "@/components/HubSpotForm";
import CleanroomRobotCatalog from "@/components/CleanroomRobotCatalog";
import LabAutomationRobotCatalog from "@/components/LabAutomationRobotCatalog";
import PaintRobotCatalog from "@/components/PaintRobotCatalog";
import PackagingRobotCatalog from "@/components/PackagingRobotCatalog";
import WeldingRobotCatalog from "@/components/WeldingRobotCatalog";
import MaterialHandlingRobotCatalog from "@/components/MaterialHandlingRobotCatalog";
import FoodBeverageRobotCatalog from "@/components/FoodBeverageRobotCatalog";
import ArticulatedRobotCatalog from "@/components/ArticulatedRobotCatalog";
import CollaborativeRobotCatalog from "@/components/CollaborativeRobotCatalog";
import ScaraRobotCatalog from "@/components/ScaraRobotCatalog";
import DeltaRobotCatalog from "@/components/DeltaRobotCatalog";
import PaintRobotsCatalog from "@/components/PaintRobotsCatalog";
import PalletizingRobotsCatalog from "@/components/PalletizingRobotsCatalog";
import RobotCatalog from "@/components/RobotCatalog";
import SolutionsExplorer from "@/components/SolutionsExplorer";
import FAQ from "@/components/FAQ";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhyProaxImage from "@/components/WhyProaxImage";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map custom components for use in MDX
    HeroBlock, Section, Grid, NumberedCard, ImageBlock, TextBlock, Button, ButtonGroup, CheckBullet, YoutubeVideoLink,
    HubSpotForm,
    CleanroomRobotCatalog,
    LabAutomationRobotCatalog,
    PaintRobotCatalog,
    PackagingRobotCatalog,
    WeldingRobotCatalog,
    MaterialHandlingRobotCatalog,
    FoodBeverageRobotCatalog,
    ArticulatedRobotCatalog,
    CollaborativeRobotCatalog,
    ScaraRobotCatalog,
    DeltaRobotCatalog,
    PaintRobotsCatalog,
    PalletizingRobotsCatalog,
    RobotCatalog,
    SolutionsExplorer,
    FAQ,
    TestimonialsCarousel,
    WhyProaxImage,
    ...components,
  };
}

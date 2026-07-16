import type { MDXComponents } from 'mdx/types';
import { HeroBlock, Section, Grid, NumberedCard, ImageBlock, CheckBullet,TextBlock, YoutubeVideoLink } from "@/components/mdx"
import Button from "@/components/ui/buttons/button";
import ButtonGroup from "@/components/ui/buttons/button-group";
import HubSpotForm from "@/components/HubSpotForm";
import WhyProaxImage from "@/components/WhyProaxImage";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map custom components for use in MDX
    HeroBlock, Section, Grid, NumberedCard, ImageBlock, TextBlock, Button, ButtonGroup, CheckBullet, YoutubeVideoLink,
    HubSpotForm,
    WhyProaxImage,
    ...components,
  };
}

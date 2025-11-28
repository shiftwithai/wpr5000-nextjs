"use client";

/* global Map, Promise */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/buttons/button';
import css from "../../styles/mdx.module.sass";
import Link from 'next/link';

export function CheckBullet({ children }) {
  return (
    <p className={ css.md_check }>
      <FontAwesomeIcon className={ css.md_check__icon } icon={ faCheck } />
      <span className={ css.md_check__label }>{ children }</span>
    </p>
  )
}

export function ButtonLink({ children, color, to, size="small" }) {
  return <Button as={ Link } to={ to } color={ color } size={ size }>{ children }</Button>
}

export function YoutubeVideoLink({ id, videos }) {
  const meta = videos[id]

  return (
    <div className={ css.video__link__container }>
      <button className={ css.video__link } onClick={ () => null }>
        <img className={ css.video__link__thumbnail } src={ meta?.snippet?.thumbnails?.medium?.url } alt="" />

        <div className={ css.video__link__details }>
          <div className={ css.video__link__title }>{ meta?.snippet?.title }</div>
          <div className={ css.video__link__subtitle }>Watch the demo</div>
        </div>
      </button>
    </div>
  )
}

export function Grid({ children, color='', grouped, min_width, max_width, theme }) {
  return (
    <div className={ `${css.cards} ${grouped ? css.grouped : ''} ${css[`theme_${theme}`]}` } style={{ "--content-block-color": color, "--strapi-grid-min": min_width, "--strapi-grid-max": max_width }}>
      { children }
    </div>
  )
}

export function Section({ children, color, leading='', size='', slim=true }) {
  return (
    <div className={ `${css.section} ${css.section_lg} ${slim && css.slim} ${css[`leading_${leading}`]} ` } style={{ "--content-block-color": color }}>
      { children }
    </div>
  )
}

export function NumberedCard({ i, image="", theme="light", title, description }) {
  return (
    <div className={ css.card }>
      { theme === 'numbered' && (
        <div className={ `${css.card__number} ${css[`card__number__${i%6 + 1}`]}` }>
          { i }
        </div>
      )}

      { image && (
        <div className={ css.card__image }>
          <img className="contain" src={ image } alt="" />
          {/* <StrapiImage image={ image.data.attributes } /> */}
        </div>
      ) }

      <div className={ css.card__copy }>
        <div className={ css.card__title }>{ title }</div>
        <div className={ css.card__description } dangerouslySetInnerHTML={{ __html: description  }} />
      </div>
    </div>
  )
}

export function HeroBlock({ children, image, style='light' }) {
  return (
    <div className={ `${css.hero} ${css.section_hug} ${css[`style_${style}`]}` }>
      <div className={ css.hero__copy }>
        { children }
      </div>

      <div className={ css.hero__media }>
        <img className="contain" src={ image } alt="" />
      </div>
    </div>
  )
}

export function ImageBlock({ alt, children, image, style='layered' }) {
  return (
    <div className={ `${css.content_block} ${css.image_block} ${css[`style_${style}`]} ${alt ? css.block_alt : ''}` }>
      <div className={ css.media }>
        <img className="contain" src={ image } alt="" />
      </div>

      <div className={ css.text }>
        { children }
      </div>
    </div>
  )
}

export function TextBlock({ children, style='light' }) {
  return (
    <div className={ `${css.text_block} ${css.section} ${css.section_hug} ${css[`style__${style}`]}` }>
      <div className={ css.text__content }>
        { children }
      </div>
    </div>
  )
}

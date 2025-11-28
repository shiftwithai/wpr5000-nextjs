import cssImage from "../styles/content-block.module.sass";

export default function ImageBlock({ alt, children, color, image, leading='', slim=true, style='layered' }) {
  return (
    <div
      className={ `${cssImage.section_lg} ${slim && cssImage.slim} ${cssImage[`leading_${leading}`]} ${cssImage.content_block} ${cssImage.image_block} ${cssImage[`style_${style}`]} ${alt ? cssImage.block_alt : ''}` }
      style={{ "--content-block-color": color }}
    >
      <div className={ cssImage.media }>
        <img src={ image } alt="" />
      </div>
 
      <div className={ cssImage.text }>
        { children }
      </div>
    </div>
  )
}
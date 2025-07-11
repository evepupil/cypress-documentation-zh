import React from "react";
import { 
  IconTechnologyUiCoverage,
  IconTechnologyAccessibility, 
} from '@cypress-design/react-icon'

export default function Logo({ alt, src, title, product: product }: { alt: string, src: string, title: string, product: string }) {
  if (product === 'ui-coverage') {
    return (
      <IconTechnologyUiCoverage 
        size="24"
        alt="UI覆盖率图标"
        fillColor="jade-200"
        strokeColor="teal-600"
      />
    )
  }

  if (product === 'accessibility') {
    return(
      <IconTechnologyAccessibility 
        size="24"
        alt="Cypress无障碍功能图标"
        fillColor="jade-200"
        strokeColor="teal-600"
      />
    )
  }

  return (
    <img
      className="logo"
      src={ src }
      title={ title }
      alt={ alt || title }
    />
  )
}
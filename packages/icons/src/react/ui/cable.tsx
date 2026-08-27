import type { Icon } from './types'

export const IconCable: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-cable'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.2 21.39c-.2.08-.3.12-.38.13a1 1 0 0 1-1.19-.81l-.01-.42v-3.82a1 1 0 0 1 1.18-.83l.37.11.4.16a2 2 0 0 1 1.13 1.6l.01.43v1.26l-.01.44a2 2 0 0 1-1.08 1.58zM17.8 2.61q.28-.12.38-.13a1 1 0 0 1 1.19.81l.01.42v3.82a1 1 0 0 1-1.18.83l-.37-.11-.4-.16a2 2 0 0 1-1.13-1.6l-.01-.43V4.8l.01-.44a2 2 0 0 1 1.08-1.58z'
        fill='currentColor'
      />
      <path
        d='M6.63 21.36c-.64.2-.96.3-1.22.25a1 1 0 0 1-.66-.49c-.13-.23-.13-.56-.13-1.24V17.3c0-.67 0-1 .12-1.23a1 1 0 0 1 .67-.49c.25-.05.57.05 1.21.25.37.11.56.17.7.27a1 1 0 0 1 .33.46c.06.16.06.36.06.74v2.58c0 .38 0 .58-.06.74a1 1 0 0 1-.33.45c-.14.11-.32.17-.69.29M17.37 2.64c.64-.2.96-.3 1.22-.25a1 1 0 0 1 .66.49c.13.23.13.56.13 1.24V6.7c0 .67 0 1-.12 1.23a1 1 0 0 1-.67.49c-.25.05-.57-.05-1.21-.25a3 3 0 0 1-.7-.27 1 1 0 0 1-.33-.46c-.06-.16-.06-.36-.06-.74V4.12c0-.38 0-.58.06-.74a1 1 0 0 1 .33-.46c.14-.1.32-.16.69-.28M4.62 20.06H2.56M19.38 3.94h2.06M4.62 17.14H2.56M19.38 6.86h2.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.81 18.63h8.34c1.24 0 1.86 0 2.33-.26a2 2 0 0 0 .75-.76c.26-.47.25-1.1.23-2.34-.01-1.21-.02-1.82-.28-2.28a2 2 0 0 0-.75-.74c-.46-.25-1.07-.25-2.28-.25H7.67c-1.15 0-1.73 0-2.16-.23a2 2 0 0 1-.86-.87c-.22-.44-.21-1.01-.2-2.17.02-1.12.03-1.69.25-2.12a2 2 0 0 1 .85-.83c.43-.23 1-.23 2.12-.23h8.38'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconStrokeCapNone: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-stroke-cap-none'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.17 17.68c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7v-.26c0-.42 0-.64-.08-.82-.08-.2-.24-.34-.54-.63l-.57-.54c-.6-.57-.9-.86-.94-1.24-.04-.37.21-.71.7-1.39l1.06-1.44c.17-.24.26-.36.31-.5l.02-.05c.04-.14.04-.29.04-.58 0-.85 0-1.28-.24-1.56l-.1-.1c-.29-.25-.72-.25-1.57-.25H3.7c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v7.36c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3z'
        fill='currentColor'
      />
      <path d='M1.7 6.32h16.47c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v1.24' stroke='currentColor' />
      <path
        d='M1.7 17.68h16.47c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7v-1.23'
        stroke='currentColor'
      />
      <path d='M1.7 12h16' stroke='currentColor' />
      <path d='M22.3 12a2.3 2.3 0 0 1-2.3 2.3 2.3 2.3 0 1 1 2.3-2.3' stroke='currentColor' />
    </svg>
  )
}

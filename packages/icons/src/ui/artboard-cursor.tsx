import type { Icon } from './types'

export const IconArtboardCursor: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-artboard-cursor'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.85 5.15H5.15v13.7h10.19l-.83-3.5.83-.92 3.5 1.21z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M18.88 2v9.73' stroke='currentColor' />
      <path d='M2 5.32h20' stroke='currentColor' />
      <path d='M2 18.78h9.6' stroke='currentColor' />
      <path d='M5.15 2v20' stroke='currentColor' />
      <path
        d='m14.65 17.26 1.01 3.06c.4 1.19.6 1.78.88 1.97a1 1 0 0 0 1.06.03c.3-.17.52-.76.98-1.92.17-.44.25-.66.38-.85a2 2 0 0 1 .53-.53c.18-.12.4-.21.84-.38h0c1.18-.47 1.77-.7 1.95-1a1 1 0 0 0-.04-1.05c-.19-.3-.8-.49-2-.87l-3.07-1c-1.64-.52-2.46-.78-2.9-.35-.42.44-.15 1.25.38 2.89'
        stroke='currentColor'
      />
    </svg>
  )
}

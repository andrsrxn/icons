import type { Icon } from './types'

export const IconDislike: Icon = ({
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
      data-slot='icon-ui-dislike'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='22.04'
        y='2.92'
        width='11.11'
        height='5.47'
        rx='1'
        transform='rotate(90 22.04 2.92)'
        fill='currentColor'
      />
      <path
        d='M9.45 2.75h8.83c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v3.6c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58h-1.75s-1.27 1.94-1.64 3.3c-.16.6-.26 1.23-.32 1.8v0c-.09.9-.14 1.36-.45 1.62-.32.26-.67.23-1.37.16-.93-.08-1.98-.38-2.47-1.24-.54-.94-.55-2.3-.4-3.51.18-1.37.26-2.05-.03-2.39s-.92-.34-2.15-.34h-.88c-2.77 0-4.16 0-4.75-.9-.6-.92-.03-2.19 1.1-4.72l.8-1.81c.77-1.73 1.15-2.6 1.9-3.08.74-.49 1.69-.49 3.58-.49'
        stroke='currentColor'
      />
      <path d='M16.56 14.19V2.75' stroke='currentColor' />
    </svg>
  )
}

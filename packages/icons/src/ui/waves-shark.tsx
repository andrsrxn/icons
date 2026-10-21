import type { Icon } from './types'

export const IconWavesShark: Icon = ({
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
      data-slot='icon-ui-waves-shark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.84 6.73c0-1.27 0-1.9-.34-2.2a1 1 0 0 0-.38-.21c-.44-.13-.97.21-2.04.9l-2.2 1.41c-.25.16-.37.24-.46.34s-.16.24-.28.5l-1.28 2.8c-.55 1.18-.82 1.77-.55 2.22.26.44.9.5 2.2.6l1.23.11.24.03.23.07 2.44.82c.71.24 1.06.36 1.3.33a1 1 0 0 0 .86-.92c.01-.24-.13-.58-.41-1.27l-.05-.12-.04-.17-.01-.12z'
        fill='currentColor'
      />
      <path
        d='M2.6 14.47a8.6 8.6 0 0 1 5.55-1.9c2.77 0 6.08 2.44 8.78 2.44s3.94-1.32 4.47-2.04'
        stroke='currentColor'
      />
      <path
        d='M2.6 18.86a8.6 8.6 0 0 1 5.55-1.9c2.77 0 6.08 2.44 8.78 2.44s3.94-1.31 4.47-2.04'
        stroke='currentColor'
      />
      <path
        d='M7.05 12.24c.2-1.65 1.53-5.02 5.22-7.38 1.08-.7 1.62-1.04 2.15-.73s.48 1.04.38 2.5c-.17 2.6-.02 5.8 1.83 8.17'
        stroke='currentColor'
      />
    </svg>
  )
}

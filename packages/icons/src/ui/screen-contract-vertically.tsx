import type { Icon } from './types'

export const IconScreenContractVertically: Icon = ({
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
      data-slot='icon-ui-screen-contract-vertically'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='7.56'
        height='20.53'
        rx='2'
        transform='matrix(-1 0 0 1 15.78 1.73)'
        fill='currentColor'
      />
      <path
        d='M15.78 17.13v1.35c0 1.68 0 2.51-.47 3.07l-.24.24c-.56.47-1.4.47-3.07.47s-2.5 0-3.07-.47l-.24-.24c-.47-.56-.47-1.4-.47-3.07v-1.35'
        stroke='currentColor'
      />
      <path
        d='M15.78 6.86V5.51c0-1.67 0-2.5-.47-3.07l-.24-.24c-.56-.47-1.4-.47-3.07-.47s-2.5 0-3.07.47l-.24.24c-.47.56-.47 1.4-.47 3.07v1.35'
        stroke='currentColor'
      />
      <path d='M7.76 12H2.35' stroke='currentColor' />
      <path d='M16.24 12h5.41' stroke='currentColor' />
      <path
        d='m6.2 14.7.58-.58c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.58-.59'
        stroke='currentColor'
      />
      <path
        d='m17.8 14.7-.58-.58c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12l.58-.59'
        stroke='currentColor'
      />
    </svg>
  )
}

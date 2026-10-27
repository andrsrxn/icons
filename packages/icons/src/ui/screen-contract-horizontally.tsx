import type { Icon } from './types'

export const IconScreenContractHorizontally: Icon = ({
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
      data-slot='icon-ui-screen-contract-horizontally'
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
        transform='matrix(0 -1 -1 0 22.27 15.78)'
        fill='currentColor'
      />
      <path
        d='M6.87 15.78H5.52c-1.68 0-2.52 0-3.07-.47l-.25-.24c-.47-.56-.47-1.4-.47-3.07s0-2.51.47-3.07l.25-.24c.55-.47 1.4-.47 3.07-.47h1.35'
        stroke='currentColor'
      />
      <path
        d='M17.13 15.78h1.35c1.68 0 2.52 0 3.07-.47l.25-.24c.47-.56.47-1.4.47-3.07s0-2.51-.47-3.07l-.25-.24c-.55-.47-1.4-.47-3.07-.47h-1.35'
        stroke='currentColor'
      />
      <path d='M12 7.75v-5.4' stroke='currentColor' />
      <path d='M12 16.24v5.4' stroke='currentColor' />
      <path
        d='m9.3 6.2.58.58c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.12-1.5l.59-.58'
        stroke='currentColor'
      />
      <path
        d='m9.3 17.8.58-.58c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l.59.58'
        stroke='currentColor'
      />
    </svg>
  )
}

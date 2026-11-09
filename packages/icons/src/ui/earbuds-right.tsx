import type { Icon } from './types'

export const IconEarbudsRight: Icon = ({
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
      data-slot='icon-ui-earbuds-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M15.46 12.07a4.8 4.8 0 1 1 4.8-4.8v13.55h-4.8z' fill='currentColor' />
      <path d='M20.26 7.28a4.8 4.8 0 1 0-4.8 4.79' stroke='currentColor' />
      <path
        d='M20.26 7.07v12.05c0 .37 0 .55-.03.7a2 2 0 0 1-1.66 1.67c-.16.03-.34.03-.71.03s-.55 0-.7-.03a2 2 0 0 1-1.67-1.66c-.03-.16-.03-.34-.03-.71v-7.05'
        stroke='currentColor'
      />
      <path d='m5.57 17.53 2.88 3.29' stroke='currentColor' />
      <path
        d='M3.74 20.82V14.8c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h.9c1.19 0 2.16 1.03 2.16 2.3s-.97 2.29-2.17 2.29H3.78'
        stroke='currentColor'
      />
      <path d='M14.45 8.63v-2.7' stroke='currentColor' />
    </svg>
  )
}

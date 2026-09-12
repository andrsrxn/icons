import type { Icon } from './types'

export const IconSword: Icon = ({
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
      data-slot='icon-ui-sword'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m8.16 18.87-3.13-3.13 9.76-12.32 7.49-1.6-1.6 7.49z'
        fill='currentColor'
      />
      <path
        d='m6.13 15.79 8.25-11.17c.4-.53.59-.8.86-.99a4 4 0 0 1 1.21-.47l2.77-.83c1.58-.47 2.37-.7 2.8-.28.42.43.18 1.22-.31 2.8l-.86 2.76a4 4 0 0 1-.46 1.17c-.18.26-.44.45-.95.84L8.31 18.04'
        stroke='currentColor'
      />
      <path d='m4.73 22.23-2.86-2.86' stroke='currentColor' />
      <path d='m3.3 20.8 3.54-3.54' stroke='currentColor' />
      <path
        d='M4.39 12.47c0 .5 0 .74.04.98a3 3 0 0 0 .53 1.28c.14.2.31.37.66.72l2.95 2.94c.54.55.82.82 1.14 1.02a3 3 0 0 0 .8.33c.36.09.75.09 1.52.09'
        stroke='currentColor'
      />
    </svg>
  )
}

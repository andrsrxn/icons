import type { Icon } from './types'

export const IconListEdit: Icon = ({
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
      data-slot='icon-ui-list-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.42 6H2.67' stroke='currentColor' />
      <path d='M11.8 12H2.68' stroke='currentColor' />
      <path d='M7.73 18H2.67' stroke='currentColor' />
      <rect
        opacity='.2'
        width='2.95'
        height='3.31'
        rx='1'
        transform='scale(1 -1)rotate(45 27.22 18.34)'
        fill='currentColor'
      />
      <path
        d='M13.77 20.5c.2 0 .3 0 .4-.03a1 1 0 0 0 .3-.26l7.28-7.27c.47-.47.7-.7.77-.98a1 1 0 0 0 0-.46c-.07-.27-.3-.5-.77-.98-.47-.47-.7-.7-.98-.77a1 1 0 0 0-.45 0c-.28.07-.52.3-.99.77l-7.27 7.28c-.14.14-.22.21-.26.3-.03.1-.03.2-.03.4v1c0 .48 0 .71.14.86s.39.15.86.15z'
        stroke='currentColor'
      />
      <path d='m20.56 13.89-2.23-2.23' stroke='currentColor' />
    </svg>
  )
}

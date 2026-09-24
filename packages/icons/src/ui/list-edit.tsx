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
        transform='scale(1 -1)rotate(45 27.02 17.17)'
        fill='currentColor'
      />
      <path d='m20.05 14.09-2.22-2.23' stroke='currentColor' />
      <path
        d='M13.52 19.98c.57-.12.85-.18 1.1-.31.25-.14.45-.34.87-.75l5.86-5.76c.57-.55.85-.83.9-1.17v-.26c-.05-.34-.33-.62-.89-1.18-.55-.55-.83-.83-1.17-.87h-.25c-.34.04-.62.32-1.17.87l-5.83 5.81c-.41.41-.62.62-.76.87s-.2.54-.32 1.1l-.13.59c-.15.68-.23 1.02-.04 1.22.2.2.54.12 1.22-.03z'
        stroke='currentColor'
      />
    </svg>
  )
}

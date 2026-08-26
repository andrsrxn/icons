import type { Icon } from './types'

export const IconBell: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-bell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m20.58 14.55.17.2a2 2 0 0 1 .4 1.06v.27c0 .34 0 .5-.03.65a2 2 0 0 1-1.69 1.7l-.65.01H5.2l-.63-.01a2 2 0 0 1-1.7-1.71c-.03-.14-.03-.3-.03-.63v-.26a2 2 0 0 1 .59-1.29l1.2-1.37v-3.02A7.4 7.4 0 0 1 12 2.8a7.4 7.4 0 0 1 7.4 7.4v2.95l.01.02z'
        fill='currentColor'
      />
      <path
        d='m20.58 14.55.17.2a2 2 0 0 1 .4 1.06v.27c0 .34 0 .5-.03.65a2 2 0 0 1-1.69 1.7l-.65.01H5.2l-.63-.01a2 2 0 0 1-1.7-1.71c-.03-.14-.03-.3-.03-.63v-.26a2 2 0 0 1 .59-1.29l1.2-1.37v-3.02A7.4 7.4 0 0 1 12 2.8a7.4 7.4 0 0 1 7.4 7.4v2.95l.01.02zm-12.5 3.89c0 1.58 1.76 2.85 3.92 2.85s3.92-1.27 3.92-2.85'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

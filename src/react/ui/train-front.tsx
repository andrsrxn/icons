import type { Icon } from './types'

export const IconTrainFront: Icon = ({
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
      data-slot='ui-icon-train-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.68 17.38 4 21.58m13.46-4.2L20 21.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M20.68 13.48c0-.28 0-.41-.03-.53a1 1 0 0 0-.74-.74c-.12-.03-.26-.03-.53-.03H4.62c-.27 0-.41 0-.53.03a1 1 0 0 0-.74.74c-.03.12-.03.25-.03.53 0 .84 0 1.25.09 1.6a3 3 0 0 0 2.22 2.22c.34.08.76.08 1.6.08h9.55c.83 0 1.25 0 1.6-.08a3 3 0 0 0 2.21-2.22c.09-.35.09-.76.09-1.6m0-7.9c0 .5-.41.91-.92.91H4.24a.9.9 0 0 1-.92-.91 2.74 2.74 0 0 1 2.75-2.75h11.86a2.74 2.74 0 0 1 2.75 2.75'
        fill='currentColor'
      />
      <path
        d='M20.68 8.83c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.32c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.55c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h5.36c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12zM3.51 12.18h16.87M3.51 20.16h16.87M3.51 6.5h16.87m-14.4 8.17h3.23m5.39 0H18'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

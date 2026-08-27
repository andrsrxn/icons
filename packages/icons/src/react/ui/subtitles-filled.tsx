import type { Icon } from './types'

export const IconSubtitlesFilled: Icon = ({
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
      data-slot='ui-icon-subtitles-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.7 11.55c0-2.82 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h6.6c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12v1.04c0 2.83 0 4.25-.87 5.13-.88.87-2.3.87-5.13.87H8.7c-2.83 0-4.25 0-5.13-.87-.87-.88-.87-2.3-.87-5.13zm16.53.63a.75.75 0 0 0-.75-.75H12a.75.75 0 1 0 0 1.5h6.48c.42 0 .75-.33.75-.75m-10.65-.75a.75.75 0 1 1 0 1.5H5.52a.75.75 0 0 1 0-1.5zm5.22 4a.75.75 0 0 0-.75-.76H5.52a.75.75 0 0 0 0 1.5h7.53c.41 0 .75-.33.75-.75m4.68-.76a.75.75 0 1 1 0 1.5h-2.41a.75.75 0 1 1 0-1.5z'
        fill='currentColor'
      />
      <rect
        x='2.7'
        y='5.55'
        width='18.61'
        height='13.04'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

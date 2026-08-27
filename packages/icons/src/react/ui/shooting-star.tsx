import type { Icon } from './types'

export const IconShootingStar: Icon = ({
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
      data-slot='ui-icon-shooting-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.78 4.73c.78-1.53 1.17-2.29 1.78-2.29s1 .76 1.78 2.3l.03.04c.22.44.34.67.53.8.2.15.44.19.93.27h.06c1.69.27 2.54.4 2.73.99.18.58-.42 1.19-1.63 2.4l-.04.04c-.35.35-.53.53-.6.76-.08.23-.04.47.04.97v.05c.27 1.7.4 2.54-.09 2.9-.5.36-1.26-.03-2.79-.8l-.04-.03c-.45-.23-.67-.34-.91-.34s-.46.11-.9.34l-.05.02c-1.53.78-2.3 1.17-2.8.8-.49-.35-.35-1.2-.09-2.9l.01-.04c.08-.5.12-.74.04-.97s-.25-.4-.6-.76l-.04-.04c-1.2-1.21-1.81-1.82-1.63-2.4.2-.58 1.04-.72 2.73-.99h.06c.49-.08.74-.12.93-.26s.3-.37.53-.81z'
        fill='currentColor'
      />
      <path
        d='M13.78 4.73c.78-1.53 1.17-2.29 1.78-2.29s1 .76 1.78 2.3l.03.04c.22.44.34.67.53.8.2.15.44.19.93.27h.06c1.69.27 2.54.4 2.73.99.18.58-.42 1.19-1.63 2.4l-.04.04c-.35.35-.53.53-.6.76-.08.23-.04.47.04.97v.05c.27 1.7.4 2.54-.09 2.9-.5.36-1.26-.03-2.79-.8l-.04-.03c-.45-.23-.67-.34-.91-.34s-.46.11-.9.34l-.05.02c-1.53.78-2.3 1.17-2.8.8-.49-.35-.35-1.2-.09-2.9l.01-.04c.08-.5.12-.74.04-.97s-.25-.4-.6-.76l-.04-.04c-1.2-1.21-1.81-1.82-1.63-2.4.2-.58 1.04-.72 2.73-.99h.06c.49-.08.74-.12.93-.26s.3-.37.53-.81zM2.54 16.06l4.91-4.9m2.49 10.28 4.48-4.48M3.49 21.32l5.38-5.39'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

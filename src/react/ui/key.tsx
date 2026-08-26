import type { Icon } from './types'

export const IconKey: Icon = ({
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
      data-slot='ui-icon-key'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.62 14.45a5.88 5.88 0 1 0-5.2-3.14L3.37 17v4.38h4.2V18.8h2.77v-2.55l2.18-2.18q.98.4 2.1.4'
        fill='currentColor'
      />
      <path
        d='M9.31 11.25a6 6 0 0 1-.57-2.55 5.88 5.88 0 1 1 3.8 5.38'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.52 8.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.3 11.28 3.97 16.6c-.3.3-.44.44-.52.62-.07.18-.07.39-.07.8v1.4c0 .95 0 1.42.3 1.71.28.3.76.3 1.7.3h.88c.28 0 .42 0 .54-.03a1 1 0 0 0 .73-.74c.03-.11.03-.26.03-.54s0-.43.03-.55a1 1 0 0 1 .74-.73c.11-.03.26-.03.54-.03h.1c.37 0 .56 0 .71-.05a1 1 0 0 0 .64-.64c.05-.15.05-.34.05-.71v-.43c0-.34 0-.5.05-.66l.05-.12c.08-.15.2-.27.44-.51l1.59-1.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconDislikeFilled: Icon = ({
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
      data-slot='icon-ui-dislike-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19.57 2.95c.6 0 .9 0 1.14.06a2 2 0 0 1 1.44 1.44c.06.25.06.55.06 1.14v5.6c0 .6 0 .9-.06 1.14a2 2 0 0 1-1.44 1.43c-.25.07-.55.07-1.14.07q-.21 0-.29-.02a.5.5 0 0 1-.36-.36l-.01-.28V3.6l.01-.28a.5.5 0 0 1 .36-.36q.08-.02.29-.02'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.33 2.96h4.79c.94 0 1.42 0 1.71.29s.3.76.3 1.7v8.11c0 .54 0 .8-.06 1.04s-.2.5-.48 1.03c-.35.67-.78 1.56-.98 2.28a8 8 0 0 0-.25 1.64c-.06 1.02-.09 1.53-.42 1.8-.33.29-.7.24-1.46.15-.88-.1-1.83-.41-2.29-1.2-.53-.89-.55-2.18-.4-3.34.16-1.38.25-2.07-.05-2.4-.3-.35-.92-.35-2.15-.35h-.77c-2.79 0-4.18 0-4.77-.9-.59-.92-.02-2.2 1.12-4.73l.7-1.57c.77-1.72 1.15-2.58 1.9-3.06.74-.48 1.68-.48 3.56-.49'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}

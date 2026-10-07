import type { Icon } from './types'

export const IconCandyCane: Icon = ({
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
      data-slot='icon-ui-candy-cane'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.45 9.05c.13.6.94.73 1.25.2q.13-.2.34-.3l1.73-.67c.21-.09.32-.13.42-.15a1 1 0 0 1 .99.4l.2.4.1.24a1 1 0 0 1-.04.68q-.02.07-.12.22l-.76 1.32c-.24.43-.36.64-.38.85a1 1 0 0 0 .13.6c.1.18.3.33.7.61.37.28.56.41.76.46q.3.06.59-.05c.2-.07.36-.24.69-.57l1.54-1.54c.3-.3.44-.44.52-.63.08-.2.07-.4.06-.82l-.03-1.75c0-.4 0-.6-.08-.78a2 2 0 0 0-.5-.6l-2.52-2.51c-.32-.33-.49-.5-.7-.57-.21-.08-.44-.05-.9 0l-2.02.2c-.35.03-.52.05-.68.12s-.28.2-.53.45l-.79.78c-.18.18-.27.27-.33.38a1 1 0 0 0-.14.48c0 .13.02.25.07.5z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m9.44 14.85-.48.43c-1.09.98-1.63 1.47-2.15 1.32l-.1-.03c-.5-.2-.66-.9-.96-2.33-.13-.6-.19-.89-.1-1.16l.03-.05c.1-.26.35-.43.84-.79l.53-.37c.84-.6 1.26-.9 1.68-.82l.15.04c.4.14.61.61 1.03 1.56.26.58.4.88.35 1.17l-.03.1c-.07.29-.31.5-.79.93'
        fill='currentColor'
      />
      <path
        d='M2.37 19.34c.72.71 1.88.72 2.6 0L16.01 8.35a1.48 1.48 0 0 1 2.1 2.1l-.58.58a1.73 1.73 0 0 0 0 2.44c.65.65 1.7.68 2.36.03q.55-.54 1-1.06c2.05-2.37 1.76-4.6-.37-6.74-2.13-2.13-4.88-2.23-6.74-.37l-5.93 5.94-5.48 5.46a1.84 1.84 0 0 0 0 2.6'
        stroke='currentColor'
      />
      <path d='m6.93 17.21-1.08-3.59' stroke='currentColor' />
      <path d='m10.16 14.1-1.09-3.6' stroke='currentColor' />
      <path d='m13.66 10.5-1.09-3.58' stroke='currentColor' />
    </svg>
  )
}

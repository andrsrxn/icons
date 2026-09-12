import type { Icon } from './types'

export const IconStarCircle: Icon = ({
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
      data-slot='icon-ui-star-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.75 12a10.25 10.25 0 1 0 20.5 0 10.25 10.25 0 0 0-20.5 0m14.11 1.62.49 3.81-4.04-1.08-3.57 1.08-.43-3.8L6.3 10.2l3.88-1.24L12 5.74l2.17 3.23 3.74 1.24z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M10.43 8.24c.79-1.54 1.18-2.31 1.8-2.31.6 0 1 .77 1.79 2.31v0c.23.45.34.68.53.82.2.14.45.18.94.26v0c1.72.27 2.57.4 2.76.99.19.58-.42 1.2-1.65 2.42v0c-.35.35-.53.53-.6.76-.08.23-.04.48.04.97v0c.27 1.72.4 2.57-.1 2.93-.49.36-1.26-.03-2.8-.82v0c-.45-.22-.68-.34-.92-.34s-.46.12-.91.34v0c-1.54.79-2.32 1.18-2.81.82s-.36-1.21-.1-2.93v0c.09-.5.12-.74.05-.97s-.25-.4-.6-.76v0C6.61 11.5 6 10.89 6.2 10.3c.18-.59 1.04-.72 2.75-1v0c.5-.07.75-.11.94-.25.2-.14.31-.37.54-.82'
        stroke='currentColor'
      />
    </svg>
  )
}

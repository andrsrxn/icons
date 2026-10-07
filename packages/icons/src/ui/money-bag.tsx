import type { Icon } from './types'

export const IconMoneyBag: Icon = ({
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
      data-slot='icon-ui-money-bag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.97 22c3.05 0 4.57 0 5.64-.55A5 5 0 0 0 20.24 18c.24-1.17-.17-2.64-.98-5.58l-.18-.64c-.46-1.67-.69-2.5-1.12-3.16a5 5 0 0 0-2.65-2.02c-.75-.24-1.61-.24-3.34-.24-1.75 0-2.63 0-3.38.24a5 5 0 0 0-2.67 2.06c-.42.66-.65 1.5-1.1 3.2l-.16.65c-.77 2.91-1.16 4.37-.9 5.54a5 5 0 0 0 2.62 3.41c1.07.54 2.58.54 5.59.54'
        fill='currentColor'
      />
      <path
        d='M12.08 22c3.14 0 4.71 0 5.82-.6a5 5 0 0 0 2.48-3.14c.31-1.22-.06-2.75-.8-5.8l-.06-.25c-.47-1.93-.7-2.9-1.2-3.64a5 5 0 0 0-2.42-1.9c-.84-.31-1.83-.31-3.82-.31-1.95 0-2.92 0-3.75.3a5 5 0 0 0-2.4 1.85c-.5.72-.75 1.67-1.25 3.55l-.07.25c-.81 3.1-1.22 4.64-.92 5.88a5 5 0 0 0 2.47 3.2c1.12.61 2.72.61 5.92.61'
        stroke='currentColor'
      />
      <path
        d='m15.33 6.36.54-1.1c.55-1.08.82-1.63.83-1.94a1.5 1.5 0 0 0-1.55-1.57c-.32.01-.88.29-2 .84l-.5.23a2 2 0 0 1-1.3 0l-.48-.23c-.92-.46-1.39-.7-1.65-.72a1.5 1.5 0 0 0-1.66 1.69c.04.26.28.72.76 1.63l.61 1.17'
        stroke='currentColor'
      />
      <path
        d='M14.56 11.94c-.22-.7-1.28-1.24-2.52-1.24-1.25 0-2.6.47-2.6 1.88 0 3.04 5.12.7 5.12 3.53 0 1.3-1.25 1.8-2.52 1.8s-2.2-.55-2.6-1.27'
        stroke='currentColor'
      />
      <path d='M11.98 19v-.97' stroke='currentColor' />
      <path d='M11.98 10.54V9.6' stroke='currentColor' />
    </svg>
  )
}

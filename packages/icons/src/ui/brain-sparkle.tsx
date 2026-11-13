import type { Icon } from './types'

export const IconBrainSparkle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-brain-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m14.34 2.8-1.33.76A2 2 0 0 0 12 5.3v13.52a2 2 0 0 0 .89 1.66l.92.62a2 2 0 0 0 2.47-.2l1.44-1.35a2 2 0 0 1 .72-.43l.8-.27a2 2 0 0 0 1.35-1.67l.23-1.98a2 2 0 0 1 .24-.76l.96-1.71a2 2 0 0 0 .19-1.5l-.3-1.13s-.15-1.15-.52-1.77c-.31-.51-1.06-1.12-1.06-1.12-.82.51-1.9.38-2.56-.33l-.56-.61 1.28-1.91s-.74-.7-1.28-1.05a8 8 0 0 0-1.24-.63 1.9 1.9 0 0 0-1.63.12'
        fill='currentColor'
      />
      <path
        d='M12.01 5.3a2.9 2.9 0 0 0-2.86-2.94A2.9 2.9 0 0 0 6.29 5.3a3 3 0 0 0 .62 1.84'
        stroke='currentColor'
      />
      <path d='M6.29 13.18a2.4 2.4 0 0 1 2.34-2.41' stroke='currentColor' />
      <path d='M17.73 13.18a2.4 2.4 0 0 0-2.34-2.41' stroke='currentColor' />
      <path
        d='M12.01 18.64a2.9 2.9 0 0 1-2.86 2.95 2.9 2.9 0 0 1-2.86-2.95 3 3 0 0 1 .62-1.84'
        stroke='currentColor'
      />
      <path d='M12.01 5.3a2.9 2.9 0 0 1 2.86-2.94c.48 0 .78.09 1.03.21' stroke='currentColor' />
      <path
        d='M12.01 18.64a2.9 2.9 0 0 0 2.86 2.95 2.9 2.9 0 0 0 2.86-2.95 3 3 0 0 0-.62-1.84'
        stroke='currentColor'
      />
      <path
        d='M5.79 4.96a2.77 2.77 0 0 0-2.73 2.8q.01.79.36 1.4a2.8 2.8 0 0 0-1.7 2.62c0 1.26.8 2.33 1.91 2.68a3 3 0 0 0-.57 1.72 2.77 2.77 0 0 0 2.73 2.8'
        stroke='currentColor'
      />
      <path
        d='M18.23 18.99c1.5 0 2.73-1.26 2.73-2.81q-.02-.99-.57-1.72a2.8 2.8 0 0 0 1.92-2.68q0-.7-.3-1.29'
        stroke='currentColor'
      />
      <path d='M12.01 18.99V4.96' stroke='currentColor' />
      <path d='M19.14 2.57c0 1.61-1.75 3.37-3.38 3.37' stroke='currentColor' />
      <path d='M19.14 2.57c0 1.62 1.75 3.37 3.38 3.37' stroke='currentColor' />
      <path d='M19.14 9.32c0-1.59-1.76-3.38-3.38-3.38' stroke='currentColor' />
      <path d='M19.14 9.32c0-1.61 1.77-3.38 3.38-3.38' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconBrain: Icon = ({
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
      data-slot='icon-ui-brain'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m10.09 3 .9.52a2 2 0 0 1 1.02 1.74v13.52a2 2 0 0 1-.89 1.66l-.92.61a2 2 0 0 1-2.47-.2l-1.44-1.34a2 2 0 0 0-.72-.43l-.8-.27a2 2 0 0 1-1.35-1.67l-.22-1.99a2 2 0 0 0-.25-.76l-.8-1.43a2 2 0 0 1 0-1.97l.8-1.4a2 2 0 0 0 .25-.74L3.43 7a2 2 0 0 1 1.09-1.54l1.25-.63a2 2 0 0 0 .38-.25L7.82 3.2A2 2 0 0 1 10.1 3'
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
      <path
        d='M12.01 5.3a2.9 2.9 0 0 1 2.86-2.94 2.9 2.9 0 0 1 2.86 2.95 3 3 0 0 1-.62 1.84'
        stroke='currentColor'
      />
      <path
        d='M12.01 18.64a2.9 2.9 0 0 0 2.86 2.95 2.9 2.9 0 0 0 2.86-2.95 3 3 0 0 0-.62-1.84'
        stroke='currentColor'
      />
      <path
        d='M5.79 4.96a2.77 2.77 0 0 0-2.73 2.8q.01.79.36 1.4a2.8 2.8 0 0 0-1.7 2.62c0 1.26.8 2.33 1.91 2.68a3 3 0 0 0-.57 1.72 2.77 2.77 0 0 0 2.73 2.8'
        stroke='currentColor'
      />
      <path
        d='M18.23 4.96c1.5 0 2.73 1.26 2.73 2.8q0 .79-.36 1.4c1 .42 1.71 1.43 1.71 2.62a2.8 2.8 0 0 1-1.92 2.68q.55.73.57 1.72a2.77 2.77 0 0 1-2.73 2.8'
        stroke='currentColor'
      />
      <path d='M12.01 18.99V4.96' stroke='currentColor' />
    </svg>
  )
}

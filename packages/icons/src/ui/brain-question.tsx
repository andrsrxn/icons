import type { Icon } from './types'

export const IconBrainQuestion: Icon = ({
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
      data-slot='icon-ui-brain-question'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m13.94 2.87-.92.52a2 2 0 0 0-1 1.74v14a2 2 0 0 0 1.18 1.82l1.1.49c.55.24 1.16.33 1.7.07a4 4 0 0 0 1.1-.8c.52-.56.82-1.91.82-1.91l1.6-1 .52-2.06s1.09-.38 1.52-1.15c.34-.6.58-1.44.73-2.03q.14-.71-.21-1.33l-1-1.76a2 2 0 0 1-.26-.75l-.23-1.84a2 2 0 0 0-1.09-1.55l-1.25-.62a2 2 0 0 1-.38-.25L16.2 3.07a2 2 0 0 0-2.26-.2'
        fill='currentColor'
      />
      <path
        d='M16.38 16.1c0-.96.83-1.74 1.85-1.74 1.03 0 1.86.78 1.86 1.73 0 1.52-1.86 1.62-1.86 3.05'
        stroke='currentColor'
      />
      <path
        d='M18.63 21.83a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.01 5.3a2.9 2.9 0 0 0-2.86-2.94A2.9 2.9 0 0 0 6.29 5.3a3 3 0 0 0 .62 1.84'
        stroke='currentColor'
      />
      <path d='M6.29 13.18a2.4 2.4 0 0 1 2.34-2.41' stroke='currentColor' />
      <path d='M16.68 11.2c-.3-.25-.92-.43-1.29-.43' stroke='currentColor' />
      <path
        d='M12.01 5.3a2.9 2.9 0 0 1 2.86-2.94 2.9 2.9 0 0 1 2.86 2.95 3 3 0 0 1-.62 1.84'
        stroke='currentColor'
      />
      <path
        d='M5.79 4.96a2.77 2.77 0 0 0-2.73 2.8q.01.79.36 1.4a2.8 2.8 0 0 0-1.7 2.62c0 1.26.8 2.33 1.91 2.68a3 3 0 0 0-.57 1.72 2.77 2.77 0 0 0 2.73 2.8'
        stroke='currentColor'
      />
      <path
        d='M18.23 4.96c1.5 0 2.73 1.26 2.73 2.8q0 .79-.36 1.4c1 .42 1.71 1.43 1.71 2.62 0 .28-.1.9-.27 1.27'
        stroke='currentColor'
      />
      <path d='M12.01 19.69V4.96' stroke='currentColor' />
      <path
        d='M12.01 18.64a2.9 2.9 0 0 1-2.86 2.95 2.9 2.9 0 0 1-2.86-2.95 3 3 0 0 1 .62-1.84'
        stroke='currentColor'
      />
      <path d='M14.87 21.6c-.59 0-1.14-.2-1.6-.51a3 3 0 0 1-1.26-2.45' stroke='currentColor' />
    </svg>
  )
}

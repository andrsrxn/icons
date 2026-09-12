import type { Icon } from './types'

export const IconWarningOctagon: Icon = ({
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
      data-slot='icon-ui-warning-octagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.2 2.44c.88-.44 1.32-.66 1.8-.66s.92.22 1.8.66l2.96 1.5 2.74 1.72c.87.54 1.3.81 1.55 1.24s.27.93.32 1.95l.16 3.15-.16 3.15c-.05 1.02-.07 1.53-.32 1.95-.25.43-.68.7-1.55 1.24l-2.74 1.72-2.96 1.5c-.88.44-1.32.66-1.8.66s-.92-.22-1.8-.66l-2.96-1.5-2.74-1.72c-.87-.54-1.3-.81-1.55-1.24s-.27-.93-.32-1.95L2.47 12l.16-3.15c.05-1.02.07-1.53.32-1.95.25-.43.68-.7 1.55-1.24l2.74-1.72z'
        fill='currentColor'
      />
      <path
        d='M10.03 2.45c.96-.54 1.44-.81 1.97-.81s1 .27 1.97.8l2.69 1.53 2.65 1.55c.96.56 1.43.84 1.7 1.3.26.46.27 1.01.28 2.12L21.3 12l-.02 3.06c-.01 1.1-.02 1.66-.28 2.12-.27.46-.74.74-1.7 1.3l-2.65 1.55-2.7 1.52c-.95.54-1.43.81-1.96.81s-1-.27-1.97-.8l-2.69-1.53-2.65-1.55c-.96-.56-1.43-.84-1.7-1.3-.26-.46-.27-1.01-.28-2.12V12l.02-3.06c.01-1.1.02-1.66.28-2.12.27-.46.74-.74 1.7-1.3l2.65-1.55z'
        stroke='currentColor'
      />
      <path d='M12 6.91v5.64' stroke='currentColor' />
      <path
        d='M12.59 16.5a.59.59 0 1 1-1.18 0 .59.59 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}

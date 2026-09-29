import type { Icon } from './types'

export const IconChessKing: Icon = ({
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
      data-slot='icon-ui-chess-king'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.49 6.62c-1.44 0-2.62.68-3.44 1.4-.58.5-.86.75-1.05.75s-.47-.25-1.05-.75c-.82-.72-2-1.4-3.44-1.4-2.87 0-5.02 3.27-4.1 6.73.65 2.39 4.33 5.08 5.32 5.77q.16.11.25.14t.3.03h5.5q.17 0 .25-.02l.21-.1c.93-.55 4.54-2.82 5.34-5.82.93-3.46-1.22-6.73-4.09-6.73'
        fill='currentColor'
      />
      <rect
        x='19'
        y='19'
        width='3.27'
        height='14'
        rx='1.5'
        transform='rotate(90 19 19)'
        stroke='currentColor'
      />
      <path
        d='M15.83 18.83c2.1-1.64 4.21-3.45 4.75-5.48.93-3.46-1.22-6.73-4.09-6.73-1.44 0-2.62.68-3.44 1.4-.58.5-.86.75-1.05.75s-.47-.25-1.05-.75c-.82-.72-2-1.4-3.44-1.4-2.87 0-5.02 3.27-4.1 6.73.55 2.03 2.67 3.84 4.76 5.48'
        stroke='currentColor'
      />
      <path d='M14.27 3.78H9.74' stroke='currentColor' />
      <path d='M12 1.61v7.05' stroke='currentColor' />
    </svg>
  )
}

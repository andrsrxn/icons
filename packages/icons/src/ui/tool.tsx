import type { Icon } from './types'

export const IconTool: Icon = ({
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
      data-slot='icon-ui-tool'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.28 3.57c2.9-2.9 5.75-2.11 7.18-1.4.53.26.58.94.16 1.36l-2.85 2.83a1 1 0 0 0 0 1.41L16.2 9.2a1 1 0 0 0 1.4 0l2.84-2.8c.43-.43 1.12-.37 1.36.18.61 1.4 1.2 4.1-1.55 6.85-1.54 1.54-4.15 1.39-5.27 1.23a1.1 1.1 0 0 0-.94.3L7.67 21.4a3 3 0 0 1-4.25.02l-.88-.88a3 3 0 0 1 .03-4.27l6.15-5.98c.25-.23.35-.57.31-.9-.15-1.23-.32-4.23 1.25-5.8'
        fill='currentColor'
      />
      <path
        d='M10.67 3.34a6 6 0 0 1 5.25-1.43c1.02.18 1.52.26 1.7.84.2.58-.23 1-1.08 1.85l-1.06 1.05h0c-.67.67-1 1-1 1.41 0 .42.33.76 1 1.43s1 1 1.42 1 .75-.33 1.42-1l1.14-1.13c.82-.81 1.23-1.22 1.8-1.05s.67.65.88 1.62a5.4 5.4 0 0 1-1.4 5.15c-1.4 1.4-4.03 1.54-5.46 1.5-.54-.02-.8-.03-1 .05s-.37.25-.7.6l-5.5 5.68h0c-.38.4-.57.6-.76.74a3 3 0 0 1-3.57.03c-.2-.13-.39-.33-.78-.73-.4-.4-.6-.59-.73-.78a3 3 0 0 1 .02-3.56c.14-.19.34-.38.74-.77l5.57-5.43c.36-.35.54-.52.62-.73s.06-.48.03-1.05c-.09-1.43-.01-3.97 1.45-5.29'
        stroke='currentColor'
      />
      <path
        d='M6.25 18.56a.58.58 0 1 1-.82-.82.58.58 0 0 1 .82.82'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}

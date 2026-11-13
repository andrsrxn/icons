import type { Icon } from './types'

export const IconMouth: Icon = ({
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
      data-slot='icon-ui-mouth'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.6 6.82c-2.3 0-3.17 1.43-4.33 2.67-.93 1-1.4 1.5-1.45 1.77a1 1 0 0 0 0 .42c.07.28.42.64 1.12 1.36l.56.56a17 17 0 0 0 2.32 2.17 8 8 0 0 0 3 1.26c.77.15 1.57.15 3.18.15s2.41 0 3.18-.15a8 8 0 0 0 3-1.26c.64-.44 1.2-1.02 2.33-2.17l.58-.6c.7-.72 1.05-1.08 1.11-1.36a1 1 0 0 0 0-.4c-.05-.28-.5-.77-1.42-1.74-1.18-1.25-2.06-2.68-4.38-2.68-1.6 0-3.03.6-3.8 1-.32.17-.47.25-.6.25-.12 0-.28-.09-.6-.26a8 8 0 0 0-3.8-1'
        fill='currentColor'
      />
      <path
        d='M3.27 9.5C4.43 8.24 5.3 6.81 7.6 6.81c1.66 0 3.05.6 3.8 1 .32.16.48.25.6.25.13 0 .28-.08.6-.25.77-.4 2.2-1 3.8-1 2.32 0 3.2 1.43 4.38 2.68.91.97 1.37 1.46 1.43 1.74a1 1 0 0 1 0 .4c-.07.28-.42.64-1.12 1.36l-.58.6a17 17 0 0 1-2.33 2.17 8 8 0 0 1-3 1.26c-.77.15-1.57.15-3.18.15-1.6 0-2.41 0-3.17-.15a8 8 0 0 1-3-1.26c-.65-.44-1.2-1.02-2.33-2.17l-.56-.56c-.7-.72-1.05-1.08-1.11-1.36a1 1 0 0 1 0-.42c.05-.28.51-.77 1.44-1.77Z'
        stroke='currentColor'
      />
      <path d='M5.62 11.63s3.87.74 6.38.74 6.38-.74 6.38-.74' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconStandSquiggle: Icon = ({
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
      data-slot='icon-ui-stand-squiggle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.76 10.72c0-2.87 0-4.31.8-5.28q.21-.26.48-.48c.97-.8 2.4-.8 5.28-.8h7.36c2.88 0 4.31 0 5.28.8q.27.21.49.48c.8.97.8 2.4.8 5.28s0 4.32-.8 5.29q-.22.26-.49.48c-.97.8-2.4.8-5.28.8H8.32c-2.88 0-4.31 0-5.28-.8a4 4 0 0 1-.49-.48c-.8-.97-.8-2.4-.8-5.29'
        fill='currentColor'
      />
      <path
        d='M8.32 17.29h7.36c2.88 0 4.31 0 5.28-.8q.27-.21.49-.48c.8-.97.8-2.4.8-5.29v0c0-2.87 0-4.31-.8-5.28a4 4 0 0 0-.49-.48c-.97-.8-2.4-.8-5.28-.8H8.32c-2.88 0-4.31 0-5.28.8q-.27.21-.49.48c-.8.97-.8 2.4-.8 5.28v0c0 2.88 0 4.32.8 5.29q.22.26.49.48c.97.8 2.4.8 5.28.8'
        stroke='currentColor'
      />
      <path d='M12 1.73v2.43' stroke='currentColor' />
      <path d='M12 17.29v5.1' stroke='currentColor' />
      <path d='M12 17.29 6.98 22.3' stroke='currentColor' />
      <path d='m12 17.29 5.02 5.02' stroke='currentColor' />
      <path
        d='M14.2 12.58c1.36-1.22 2.23-2.56 2.23-3.37 0-1.14-.95-1.65-1.97-1.47-1.95.34-2.6 2.3-5.55 2.13-1.36-.08-1.81-1.5-.78-2.31.66-.52 1.58-.46 2.38-.76m3.7 5.78c-.73.65-1.6 1.27-2.53 1.75-1.71.87-3.23-.16-2.92-1.26.26-.92 1.51-1.26 2.92-1.26.67 0 1.91.28 2.52.77m0 0c.72.6 1.15 1.09 1.15 1.09'
        stroke='currentColor'
      />
    </svg>
  )
}

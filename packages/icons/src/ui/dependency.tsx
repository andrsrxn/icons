import type { Icon } from './types'

export const IconDependency: Icon = ({
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
      data-slot='icon-ui-dependency'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.61 4.2c0-.87 0-1.3.18-1.63q.22-.4.62-.62c.33-.18.77-.18 1.63-.18h11.92c.86 0 1.3 0 1.63.18q.4.22.62.62c.18.33.18.76.18 1.63s0 1.3-.18 1.63a1.5 1.5 0 0 1-.62.63c-.33.17-.77.17-1.63.17H6.04c-.86 0-1.3 0-1.63-.17a1.5 1.5 0 0 1-.62-.63C3.6 5.5 3.6 5.07 3.6 4.2'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.51 19.87c0-.86 0-1.3.17-1.63q.23-.4.63-.62c.33-.18.76-.18 1.63-.18h6.12c.87 0 1.3 0 1.63.18q.4.22.63.62c.17.33.17.77.17 1.63 0 .87 0 1.3-.17 1.63a1.5 1.5 0 0 1-.63.63c-.33.17-.76.17-1.63.17H8.94c-.87 0-1.3 0-1.63-.17a1.5 1.5 0 0 1-.63-.63c-.17-.33-.17-.76-.17-1.63'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M17.96 6.63H6.04c-.86 0-1.3 0-1.63-.17a1.5 1.5 0 0 1-.62-.63C3.6 5.5 3.6 5.07 3.6 4.2v0c0-.87 0-1.3.18-1.63q.22-.4.62-.62c.33-.18.77-.18 1.63-.18h11.92c.86 0 1.3 0 1.63.18q.4.22.62.62c.18.33.18.76.18 1.63v0c0 .87 0 1.3-.18 1.63a1.5 1.5 0 0 1-.62.63c-.33.17-.77.17-1.63.17'
        stroke='currentColor'
      />
      <path
        d='M15.06 22.3H8.94c-.87 0-1.3 0-1.63-.17a1.5 1.5 0 0 1-.63-.63c-.17-.33-.17-.76-.17-1.63v0c0-.86 0-1.3.17-1.63q.23-.4.63-.62c.33-.18.76-.18 1.63-.18h6.12c.87 0 1.3 0 1.63.18q.4.22.63.62c.17.33.17.77.17 1.63v0c0 .87 0 1.3-.17 1.63a1.5 1.5 0 0 1-.63.63c-.33.17-.76.17-1.63.17'
        stroke='currentColor'
      />
      <path d='M12 9.03v5.49' stroke='currentColor' />
      <path
        d='m14.81 12.74-.69.69c-1 1-1.5 1.5-2.12 1.5s-1.12-.5-2.12-1.5l-.7-.7'
        stroke='currentColor'
      />
    </svg>
  )
}

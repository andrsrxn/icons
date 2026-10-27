import type { Icon } from './types'

export const IconLogicNand: Icon = ({
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
      data-slot='icon-ui-logic-nand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.48 19.2c.66 0 1 0 1.27-.02a6 6 0 0 0 5.42-5.41c.02-.28.02-.61.02-1.27v-1c0-.66 0-.99-.02-1.27a6 6 0 0 0-5.42-5.41c-.28-.03-.6-.03-1.27-.03h-.32a1.5 1.5 0 0 0-1.35 1.36v11.7a1.5 1.5 0 0 0 1.35 1.35z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M18.9 12h3.43' stroke='currentColor' />
      <path d='M1.67 8.46H5.8' stroke='currentColor' />
      <path d='M1.67 15.54H5.8' stroke='currentColor' />
      <path
        d='M7.28 19.2c-.82 0-1.48-.65-1.48-1.47V6.27c0-.82.66-1.48 1.48-1.48 3.82 0 6.91 3.1 6.91 6.91v.6a6.9 6.9 0 0 1-6.9 6.9'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='16.55' cy='12' r='2.35' fill='currentColor' />
      <circle cx='16.55' cy='12' r='2.35' stroke='currentColor' />
    </svg>
  )
}

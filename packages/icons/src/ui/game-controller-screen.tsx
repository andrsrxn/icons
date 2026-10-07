import type { Icon } from './types'

export const IconGameControllerScreen: Icon = ({
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
      data-slot='icon-ui-game-controller-screen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.41 14.58h3.42' stroke='currentColor' />
      <path d='M9.12 16.29v-3.42' stroke='currentColor' />
      <path
        d='M14.47 16.2a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.49 13.66a.48.48 0 1 1-.96 0 .48.48 0 0 1 .96 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.81 21.16c1.35 0 2.4-1.16 2.27-2.5l-.22-2.27c-.19-1.9-.28-2.86-.63-3.62a5 5 0 0 0-2.92-2.65c-.8-.28-1.75-.28-3.67-.28h-1.27c-1.92 0-2.88 0-3.67.28a5 5 0 0 0-2.92 2.64c-.34.76-.44 1.71-.63 3.62l-.22 2.25a2.3 2.3 0 0 0 3.92 1.86l.36-.36.32-.3a3 3 0 0 1 1.74-.72h3.51a3 3 0 0 1 1.73.71c.09.07.17.15.32.31l.38.37c.42.43 1 .66 1.6.66'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.87 6.84c0-1.89 0-2.83.6-3.42.58-.58 1.52-.58 3.4-.58h12.24c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v5.08a1.66 1.66 0 0 1-3.04.93l-.64-.97c-.33-.48-.5-.73-.7-.9a2 2 0 0 0-.55-.33c-.26-.1-.55-.14-1.13-.2l-3.57-.38-.42-.03c-.1 0-.21 0-.43.03l-3.34.36a4 4 0 0 0-1.69.38c-.34.2-.58.55-1.07 1.23l-.79 1.1c-.23.33-.6.53-1 .53a1.86 1.86 0 0 1-1.87-1.86z'
        fill='currentColor'
      />
      <path
        d='M19.94 13.67a2.33 2.33 0 0 0 2.33-2.34V8.25c0-2.26 0-3.4-.58-4.19a3 3 0 0 0-.65-.64c-.79-.58-1.92-.58-4.18-.58H7.14c-2.26 0-3.4 0-4.18.58a3 3 0 0 0-.65.64c-.58.8-.58 1.93-.58 4.2v2.95c0 1.36 1.1 2.46 2.46 2.46'
        stroke='currentColor'
      />
    </svg>
  )
}

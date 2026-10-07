import type { Icon } from './types'

export const IconMailLetter: Icon = ({
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
      data-slot='icon-ui-mail-letter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.9 13.58c-.07-1.46-.1-2.19.36-2.5.47-.31 1.13-.01 2.46.6l4.06 1.84c.2.1.3.14.4.16s.21.02.43.02h5.24c.23 0 .34 0 .45-.02s.22-.08.42-.18l3.53-1.72c1.34-.65 2-.98 2.48-.67s.45 1.05.4 2.54l-.22 5.79c-.03.9-.05 1.36-.34 1.64s-.74.28-1.65.28H4.15c-.9 0-1.36 0-1.65-.27-.29-.28-.31-.73-.35-1.64z'
        fill='currentColor'
      />
      <path
        d='m18.13 7.13 1.65 1.2c1.2.89 1.81 1.33 2.14 1.97s.33 1.39.33 2.89v2.47c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-8.5c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V13.2c0-1.5 0-2.25.33-2.89s.94-1.08 2.15-1.96l1.66-1.2'
        stroke='currentColor'
      />
      <path
        d='m2.09 10.65 6.07 2.91c.41.2.62.3.84.35s.44.05.9.05h4.2c.46 0 .69 0 .9-.05s.43-.15.84-.35l6.07-2.9'
        stroke='currentColor'
      />
      <path
        d='M18.05 12.45V8.34c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.17-.88c-2.86 0-4.3 0-5.17.88s-.88 2.3-.88 5.12v4.1'
        stroke='currentColor'
      />
      <path d='M14.58 6.2H9.42' stroke='currentColor' />
      <path d='M12.3 9.72H9.43' stroke='currentColor' />
    </svg>
  )
}

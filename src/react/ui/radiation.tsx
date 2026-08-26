import type { Icon } from './types'

export const IconRadiation: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-radiation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m15.14 18.67-1.3-3.13a1 1 0 0 0-.94-.61l-1.78.04a1 1 0 0 0-.88.57L8.82 18.5a1 1 0 0 0 0 .84l.26.6a1 1 0 0 0 .96.59l4.12-.17a1 1 0 0 0 .9-.7l.1-.32a1 1 0 0 0-.02-.68M4.25 10.47l3.35.44a1 1 0 0 0 1.01-.5l.85-1.56a1 1 0 0 0-.05-1.05L7.55 5.1a1 1 0 0 0-.73-.43l-.65-.07a1 1 0 0 0-.99.53l-1.9 3.65a1 1 0 0 0 .14 1.14l.22.25a1 1 0 0 0 .61.31m15.8-.01-3.35.44a1 1 0 0 1-1-.5l-.86-1.56a1 1 0 0 1 .05-1.05l1.86-2.71a1 1 0 0 1 .73-.43l.66-.07a1 1 0 0 1 .98.53l1.91 3.65a1 1 0 0 1-.15 1.14l-.22.25a1 1 0 0 1-.6.31'
        fill='currentColor'
      />
      <circle
        cx='12.02'
        cy='11.5'
        r='.43'
        transform='rotate(60 12.02 11.5)'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m14.35 16.12.28.74c.6 1.6.9 2.4.6 3l-.22.3c-.44.5-1.3.5-3 .5-1.83 0-2.74 0-3.2-.54l-.2-.32c-.3-.63.08-1.46.84-3.12l.33-.72h0c.25-.55.38-.83.58-1.03q.21-.2.5-.32c.26-.1.57-.1 1.17-.1.65 0 .98 0 1.26.12q.3.12.51.35c.2.22.32.53.55 1.14m-7.5-5.05-.78-.13c-1.69-.28-2.53-.42-2.89-.99l-.16-.33c-.2-.64.22-1.38 1.07-2.86.92-1.57 1.37-2.36 2.06-2.49q.19-.03.38-.01c.7.05 1.23.8 2.28 2.28l.47.65h0c.35.5.52.74.6 1.02q.06.29.02.59c-.04.28-.2.54-.5 1.07a3 3 0 0 1-.72 1.02 2 2 0 0 1-.57.27c-.3.07-.61.02-1.26-.09m10.6 0 .78-.13c1.69-.28 2.53-.42 2.9-.99q.09-.15.15-.33c.2-.64-.22-1.38-1.07-2.86-.91-1.57-1.37-2.36-2.06-2.49l-.38-.01c-.7.05-1.22.8-2.28 2.28l-.46.65h0c-.36.5-.53.74-.6 1.02q-.08.29-.03.59c.04.28.2.54.5 1.07.32.56.49.84.72 1.02q.26.2.57.27c.3.07.62.02 1.26-.09'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

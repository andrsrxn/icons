import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>GS</title>

      <defs>
        <linearGradient id='gs-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gs-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#07319c' />
          <stop offset='100%' stopColor='#00247e' />
        </linearGradient>
        <linearGradient id='gs-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <linearGradient id='gs-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1e1e1e' />
          <stop offset='100%' />
        </linearGradient>
        <linearGradient id='gs-h' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#a2adb0' />
          <stop offset='100%' stopColor='#8b9497' />
        </linearGradient>
        <linearGradient id='gs-i' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#4f4f4f' />
          <stop offset='100%' stopColor='#2b2b2b' />
        </linearGradient>
        <linearGradient id='gs-k' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fec241' />
          <stop offset='100%' stopColor='#febb2c' />
        </linearGradient>
        <linearGradient id='gs-l' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#a84b14' />
          <stop offset='100%' stopColor='#913f0e' />
        </linearGradient>
        <linearGradient id='gs-m' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#cfb063' />
          <stop offset='100%' stopColor='#bea157' />
        </linearGradient>
        <linearGradient id='gs-n' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2d42ff' />
          <stop offset='100%' stopColor='#0b24fc' />
        </linearGradient>
        <linearGradient id='gs-o' x1='0%' x2='100%' y1='0%' y2='50%'>
          <stop offset='0%' stopColor='#e3dc3d' />
          <stop offset='100%' stopColor='#cfc82a' />
        </linearGradient>
        <linearGradient id='gs-p' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#7f7d7d' />
          <stop offset='100%' stopColor='#656263' />
        </linearGradient>
        <linearGradient id='gs-s' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0f8012' />
          <stop offset='100%' stopColor='#0b6a0d' />
        </linearGradient>
        <linearGradient id='gs-t' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcf44' />
          <stop offset='100%' stopColor='#fcc72e' />
        </linearGradient>
        <ellipse id='gs-d' cx='.5' cy='1.5' rx='1' ry='1.5' />
        <ellipse id='gs-g' cx='.5' cy='1.5' rx='1' ry='1.5' />
        <path
          id='gs-q'
          d='M.007.506A.49.49 0 0 1 .495 0h2.01c.273 0 .498.23.502.506L3.03 2.25a.52.52 0 0 1-.207.388l-1.095.722a.41.41 0 0 1-.417 0L.24 2.639a.53.53 0 0 1-.21-.388z'
        />
        <clipPath id='gs-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gs-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gs-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gs-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#gs-a)'
            fillRule='nonzero'
            d='M3 3.23-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5z'
          />
          <path
            fill='url(#gs-c)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            fill='url(#gs-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#gs-c)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
          <g transform='translate(18 8)'>
            <mask id='gs-f' fill='#fff'>
              <use xlinkHref='#gs-d' />
            </mask>
            <use xlinkHref='#gs-d' fill='url(#gs-e)' />
            <ellipse cy='2' fill='url(#gs-a)' mask='url(#gs-f)' rx='1' ry='1.5' />
          </g>
          <g transform='translate(14 8)'>
            <mask id='gs-j' fill='#fff'>
              <use xlinkHref='#gs-g' />
            </mask>
            <use xlinkHref='#gs-g' fill='url(#gs-h)' />
            <ellipse cx='1' cy='2' fill='url(#gs-i)' mask='url(#gs-j)' rx='1' ry='1.5' />
          </g>
          <path
            fill='url(#gs-k)'
            d='M16.5 12.5c.828.5 1.5.276 1.5 0s-.672-.5-1.5-.5-1.5.224-1.5.5.672.5 1.5 0'
          />
          <circle cx='18.5' cy='5.5' r='1' fill='url(#gs-a)' />
          <circle cx='16.5' cy='4.5' r='1' fill='url(#gs-l)' />
          <circle cx='16.5' cy='3.75' r='1' fill='url(#gs-m)' />
          <circle cx='16.5' cy='11.5' r='1' fill='url(#gs-a)' />
          <circle cx='14.5' cy='5.5' r='1' fill='url(#gs-a)' />
          <circle cx='15' cy='6.5' r='1' fill='url(#gs-n)' />
          <circle cx='18' cy='6.5' r='1' fill='url(#gs-n)' />
          <circle cx='19' cy='8' r='1' fill='url(#gs-o)' />
          <path fill='url(#gs-p)' d='m16 7.5-.5.5h2l-.5-.5.5-1.5s-.448-1-1-1-1 1-1 1z' />
          <path
            fill='#5d0543'
            d='M16.5 6.5s.5-.112.5-.38c0-.008-.5-.12-.5-.12s-.5.112-.5.12c0 .268.5.38.5.38'
          />
          <g transform='translate(15 8)'>
            <mask id='gs-r' fill='#fff'>
              <use xlinkHref='#gs-q' />
            </mask>
            <use xlinkHref='#gs-q' fill='url(#gs-a)' />
            <circle cx='2.5' cy='2.5' r='1' fill='#225da4' mask='url(#gs-r)' />
            <circle cx='.5' cy='1.5' r='1' fill='#225da4' mask='url(#gs-r)' />
            <path fill='url(#gs-s)' d='M0 0h3L1.5 3z' mask='url(#gs-r)' />
            <circle cx='1.5' cy='1.5' r='1' fill='url(#gs-t)' mask='url(#gs-r)' />
          </g>
        </g>
      </g>
    </svg>
  )
}

import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandJCB: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    xmlns='http://www.w3.org/2000/svg'
    aria-label='JCB'
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 300 225'
    {...props}>
    <g clipPath='url(#clip0_241_2)'>
      <path
        fill='#fff'
        d='M1.208 73.703H90.28l1.186 88.224H-.125zm102.591 0h90.405l1.186 88.224h-91.591zm103.924 0h90.405l1.186 88.224h-91.591z'
      />
      <path
        fill='url(#paint0_linear_241_2)'
        d='M225.935 136.786h21.662c.619 0 2.063-.206 2.682-.206 4.126-.825 7.634-4.539 7.634-9.697 0-4.951-3.508-8.665-7.634-9.696-.619-.207-1.857-.207-2.682-.207h-21.662z'
      />
      <path
        fill='url(#paint1_linear_241_2)'
        d='M245.121 0c-20.631 0-37.548 16.711-37.548 37.549V76.54h53.022c1.237 0 2.682 0 3.713.207 11.966.618 20.838 6.808 20.838 17.536 0 8.459-5.983 15.68-17.124 17.124v.412c12.172.826 21.456 7.634 21.456 18.156 0 11.347-10.315 18.774-23.932 18.774h-58.18v76.335h55.085c20.631 0 37.549-16.711 37.549-37.549V0z'
      />
      <path
        fill='url(#paint2_linear_241_2)'
        d='M255.231 96.761c0-4.951-3.508-8.252-7.634-8.871-.412 0-1.444-.206-2.063-.206h-19.599v18.155h19.599c.619 0 1.857 0 2.063-.206 4.126-.619 7.634-3.92 7.634-8.872'
      />
      <path
        fill='url(#paint3_linear_241_2)'
        d='M37.573 0C16.942 0 .024 16.711.024 37.549v92.633c10.522 5.158 21.457 8.459 32.391 8.459 12.998 0 20.012-7.84 20.012-18.568V76.335h32.185v43.532c0 16.917-10.522 30.74-46.214 30.74-21.662 0-38.58-4.745-38.58-4.745v79.017h55.085c20.631 0 37.549-16.712 37.549-37.549V0z'
      />
      <path
        fill='url(#paint4_linear_241_2)'
        d='M141.347 0c-20.631 0-37.548 16.711-37.548 37.549V86.65c9.49-8.046 25.995-13.203 52.609-11.966 14.235.62 29.502 4.54 29.502 4.54v15.885c-7.633-3.92-16.711-7.427-28.47-8.252-20.219-1.444-32.391 8.459-32.391 25.789 0 17.536 12.172 27.439 32.391 25.788 11.759-.825 20.837-4.538 28.47-8.252v15.886s-15.06 3.92-29.502 4.539c-26.614 1.238-43.119-3.92-52.609-11.966v86.65h55.085c20.631 0 37.548-16.711 37.548-37.548V0z'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_241_2'
        x1='207.538'
        x2='300.249'
        y1='126.908'
        y2='126.908'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#007940' />
        <stop offset='.229' stopColor='#00873f' />
        <stop offset='.743' stopColor='#40a737' />
        <stop offset='1' stopColor='#5cb531' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_241_2'
        x1='207.536'
        x2='300.253'
        y1='112.452'
        y2='112.452'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#007940' />
        <stop offset='.229' stopColor='#00873f' />
        <stop offset='.743' stopColor='#40a737' />
        <stop offset='1' stopColor='#5cb531' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_241_2'
        x1='207.536'
        x2='300.25'
        y1='96.736'
        y2='96.736'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#007940' />
        <stop offset='.229' stopColor='#00873f' />
        <stop offset='.743' stopColor='#40a737' />
        <stop offset='1' stopColor='#5cb531' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_241_2'
        x1='-.019'
        x2='94.127'
        y1='112.452'
        y2='112.452'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#1f286f' />
        <stop offset='.475' stopColor='#004e94' />
        <stop offset='.826' stopColor='#0066b1' />
        <stop offset='1' stopColor='#006fbc' />
      </linearGradient>
      <linearGradient
        id='paint4_linear_241_2'
        x1='103.265'
        x2='194.703'
        y1='112.452'
        y2='112.452'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#6c2c2f' />
        <stop offset='.173' stopColor='#882730' />
        <stop offset='.573' stopColor='#be1833' />
        <stop offset='.859' stopColor='#dc0436' />
        <stop offset='1' stopColor='#e60039' />
      </linearGradient>
      <clipPath id='clip0_241_2'>
        <path fill='#fff' d='M0 0h300v225H0z' />
      </clipPath>
    </defs>
  </svg>
)

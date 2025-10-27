# RedGinkgo Games Website

This repository contains the source code for the RedGinkgo Games company website, hosted on GitHub Pages.

The website is built using simple HTML, CSS, and includes an IR (Investor Relations) section for company announcements.

## Structure

- `index.html`: The main landing page.
- `ir.html`: The IR announcement list page.
- `ir_detailPage*.html`: Individual IR announcement detail pages.
- `ir_style.css`: CSS styles specifically for the IR pages.
- `www/`: Directory containing image assets (logos, etc.).

## Features

- Basic company introduction on the homepage.
- IR section displaying a list of announcements.
- Separate pages for each announcement detail.

## iOS/Android 영상 섹션 (download_supporters.html)

`download_supporters.html`에는 iOS/Android 다운로드 및 권한 설정 영상 탭 섹션이 포함되어 있습니다.

- 편집 위치: `download_supporters.html` 상단의 소개 영상 아래, `Game Download` 헤더 위
- iOS 영상: https://www.youtube.com/watch?v=eGMKDTnuDww
- Android 영상: https://www.youtube.com/watch?v=7EN3Yre85Cw

### 구조
- 탭 버튼: `.os-guides .tab-buttons`
- 탭 패널: `#panel-ios`, `#panel-android`
- 반응형 임베드: `.ratio-16x9` 래퍼 + `iframe`

### 교체 방법
1. iOS: `#panel-ios iframe`의 `src`/하단 링크 교체
2. Android: `#panel-android iframe`의 `src`/하단 링크 교체

접근성/성능: `title`, `aria-selected`, `loading="lazy"`, `youtube-nocookie.com` 사용.

## Setup (for local development)

1. Clone this repository.
2. Open `index.html` in your web browser.

## Deployment

The website is automatically deployed via GitHub Pages.

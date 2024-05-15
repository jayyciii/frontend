## Bắt đầu bằng cách chạy lần lượt các câu lệnh phía dưới để cài đặt các thư viện cần thiết

npm i / npm i --force
npm i next@latest

## Tạo mới tệp .env trong thư mục gốc và config như sau:

``` 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_API_URL=http://localhost:3000/api

MONGODB_URL=""

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

API_KEY = "" #api từ OpenAI


```


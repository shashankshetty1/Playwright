# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e6]:
    - heading "TaskHub" [level=4] [ref=e10]
    - heading "Login" [level=4] [ref=e11]
    - text: Login with your work credentials.
    - generic [ref=e13]:
      - generic [ref=e15]:
        - img "mail" [ref=e17]:
          - img [ref=e18]
        - textbox "Email" [ref=e20]: wrong@test.com
      - generic [ref=e22]:
        - img "lock" [ref=e24]:
          - img [ref=e25]
        - textbox "Password" [ref=e27]: Wrong123
        - img "eye-invisible" [ref=e29] [cursor=pointer]:
          - img [ref=e30]
      - generic [ref=e34]:
        - link "Forgot Password?" [ref=e35] [cursor=pointer]:
          - /url: /forgot-password
        - generic [ref=e36] [cursor=pointer]:
          - checkbox "Remember me" [ref=e38]
          - generic [ref=e40]: Remember me
      - generic [ref=e41]: Login failed. Try again.
      - button "Log in" [active] [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: Log in
    - separator [ref=e45]:
      - generic [ref=e46]: Or
    - button "google Sign in with Google" [ref=e47] [cursor=pointer]:
      - img "google" [ref=e49]:
        - img [ref=e50]
      - generic [ref=e52]: Sign in with Google
  - generic [ref=e54]:
    - img "close-circle" [ref=e55]:
      - img [ref=e56]
    - generic [ref=e58]: Login failed. Try again.
```
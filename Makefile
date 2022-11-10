.PHONY: run

run:
	docker build . -t simple-html-tester
	docker run -p 80:80 -v /Users/misterbobot/Desktop/hueta/test-for-ngrok/src:/usr/share/nginx/html simple-html-tester

.DEFAULT_GOAL := run
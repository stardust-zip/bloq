 #!/run/current-system/sw/bin/bash
METHOD="GET"
PATH_URL="http://localhost:8000/posts/5"
HEADER="Content-Type: application/json"

curl -X "$METHOD" \
    -H "$HEADER" \
    "$PATH_URL"

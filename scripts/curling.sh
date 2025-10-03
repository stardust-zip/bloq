 #!/run/current-system/sw/bin/bash
METHOD="POST"
PATH_URL="http://localhost:8000/posts"
HEADER="Content-Type: application/json"

curl -i -X "$METHOD" \
    -H "$HEADER" \
    -d '{"title": "", "description": "Kick"}' \
    "$PATH_URL"

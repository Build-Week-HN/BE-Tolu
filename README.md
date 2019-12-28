# BE-Tolu

## Base URL: https://bw-hackernewsclone.herokuapp.com/

---

##Endpoints

### GET /api/articles

    -returns top 20 stories on hackernews website

### POST api/auth/register

    -input:
        -username -Required
        -email -Required
        -password -Required

    -returns success message

### POST api/auth/login

    -input:
        -email -Required
        -password -Required

    -returns a token

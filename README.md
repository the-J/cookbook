# CookBook
## Simple project for handling your personal Pantry

### Pages
- log-in
  - handling all form validation and feedback
- sign-in
  - handling all form validation and feedback
- pantry
  - add name
  - add quantity 
  - add description
  - add photo 
    - take photo on web and mobile
    - change camera if available
    - save to S3
    

### TODO
- [ ] spend more time on camera handling implementation
- [ ] confirmation email should redirect to CookBook
- [ ] inputs validation in stock modals
- [ ] restrict possible emails registration (only selected emails should sign-in)
- [ ] add lambda to scale added photos to low quality
- [ ] photo update in stock
- [ ] properly scale photo in stock list
- [ ] get img from cache... 
- [ ] redirect

### BUGS
- [ ] some chrome versions block allow/reject on camera view (can't click)

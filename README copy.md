.main__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-template-areas: 
    "header   header  header  header   header  header  header   header  header  header   header  header"
    ".        profile profile profile  profile intro   intro    intro   intro   intro    intro   ."
    "footer   footer  footer  footer   footer  footer  footer   footer  footer  footer   footer  footer" 
    "credits  credits credits credit   credits  credits credits credits credits credits  credits credits";  
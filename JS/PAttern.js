function v(m , n)
{
    for(let i = 0 ; i < 5 ; i++)
    {
        for(let j = 0 ; j < 5 ; j++)
        {
            if((j==0 && i <=2) || (j == 4 && i <=2) || (i == 3 && (j == 1 || j == 3)) || (i == 4 && j ==2))
            {
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}


function i(m,n)
{
    for(let i = 5 ; i < 10 ; i++)
    {
        for(let j = 5 ; j < 10 ; j++)
        { 
            if((j == 7) || (i == 5) || i == 9)
            {
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}

v(5,10)
i(5,10);
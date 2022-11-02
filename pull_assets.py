import git

def Pull_Assets():
    repo = git.Repo('COP26_2021')
    repo.remote().fetch()
    origin = repo.remote(name='origin')

    try:
        repo.git.add('assets/data/livegraph_150_cop27.js')
    except:
        pass
    try:
        repo.git.add('assets/data/livegraph_500_cop27.js')
    except:
        pass
    try:
        repo.git.add('assets/data/livegraph_1500_cop27.js')
    except:
        pass
    try:
        repo.git.add('assets/data/livegraph_150_cop27_pro.js')
    except:
        pass
    try:
        repo.git.add('assets/data/livegraph_150_cop27_con.js')
    except:
        pass
    try:
        repo.git.add('_news/*.md')
    except:
        pass
    try:
        repo.git.add('assets/data/trends_data.js')
    except:
        print('Trend failed push')
    #try:
    #    repo.git.add('assets/data/livegraph_10000.js')
    #except:
    #    print('LG 10k failed')
    repo.git.commit('-m', 'Updated live files')
    origin.pull()
    origin.push()

# Run the current folder as localhost:80

# Imports
import os
import sys
import http.server

# Get the current directory
current_dir = os.path.dirname(os.path.realpath(__file__))
# Change directory
os.chdir(current_dir)
# Run the server
server = http.server.HTTPServer
handler = http.server.CGIHTTPRequestHandler
server_address = ("", 80)
handler.cgi_directories = [""]
# Set 404 page
handler.error_message_format = open("404.html", "r").read()
# Run the server
httpd = server(server_address, handler)
httpd.serve_forever()


